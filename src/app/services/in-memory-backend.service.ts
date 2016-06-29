import { IPromise, IQService } from 'angular';
import { Inject } from 'ng-forward';
import { Hero } from '../models/hero';

@Inject('$q', 'API_BASE', 'SEED_DATA')
export class InMemoryBackendService {
  private database: any;

  constructor(private $q: IQService, private apiBase: string, data: any) {
    this.database = data.createDb();
  }

  get(url: string): IPromise<any> {
    var dataTable = this.database[url.replace(this.apiBase, '')];

    return this.$q.resolve(dataTable);
  }

  post(url: string, data: any): IPromise<any> {
    var dataTable = this.database[url.replace(this.apiBase, '')];
    var dataRow = JSON.parse(data);
    var maxId = dataTable.length ? this.getMaxId(dataTable) : 0;

    dataRow.id = maxId + 1;
    dataTable.push(dataRow);

    return this.$q.resolve(dataRow);
  }

  put(url, data: any): IPromise<any> {
    var urlParts = url.replace(this.apiBase, '').split('/');
    var dataTable = this.database[urlParts[0]];
    var dataRow = JSON.parse(data);
    var index = dataTable.findIndex(row => row.id === parseInt(urlParts[1]));

    if (index > -1) {
      dataTable[index] = dataRow;
    }

    return this.$q.resolve(dataRow);
  }

  delete(url) {
    var urlParts = url.replace(this.apiBase, '').split('/');
    var dataTable = this.database[urlParts[0]];
    var index = dataTable.findIndex(row => row.id === parseInt(urlParts[1]));

    if (index > -1) {
      dataTable.splice(index, 1);
    }

    return this.$q.resolve();
  }

  private getMaxId(dataTable) {
    return Math.max.apply(Math, dataTable.map(function (dataRow) {
      return dataRow.id;
    }));
  }
}
export class BaseMock {
  private itemsMock: any[];

  constructor() {
    this.itemsMock = [];
  }

  private generateId(): number {
    let aux: number = 0;
    this.itemsMock.forEach((item) => {
      if (item.id > aux) {
        aux = item.id;
      }
    });

    return aux + 1;
  }

  setItemMock(mock: any) {
    this.itemsMock.push(mock);
  }

  getItemsMock(): any {
    return this.itemsMock;
  }

  insertItem(item: any): any {
    item.id = this.generateId();
    this.itemsMock.push(item);
    return Object.assign({}, item);
  }

  updateItem(item: any): any {
    this.itemsMock.forEach((p, index) => {
      if (p.id === item.id) {
        this.itemsMock[index] = item;
      }
    });

    return Object.assign({}, item);
  }

  findById(id: number): any {
    return Object.assign({}, this.itemsMock.find((item) => item.id === id));
  }

  delete(item: any): any {
    let aux = null;
    let pos = null;

    this.itemsMock.forEach((p, index) => {
      if (p.id === item) {
        aux = this.itemsMock[index];
        pos = index;
      }
    });

    if (pos) {
      this.itemsMock.splice(pos, 1);
    }

    return Object.assign({}, item);
  }
}

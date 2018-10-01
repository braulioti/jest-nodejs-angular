export class BaseMock {
  private itemsMock: any[];

  constructor() {
    this.itemsMock = [];
  }

  setItemMock(mock: any) {
    this.itemsMock.push(mock);
  }

  getItemsMock(): any[] {
    return this.itemsMock;
  }
}

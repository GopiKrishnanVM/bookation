export class ErrorModel {
  errorCode!: string;
  errorMsg!: string;
  constructor({
    errorCode,
    errorMsg,
  }: {
    errorCode: string;
    errorMsg: string;
  }) {
    this.errorCode = errorCode;
    this.errorMsg = errorMsg;
  }
}

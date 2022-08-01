class ResponseDto {
  constructor(response) {
    this.code = [response.code];
    this.message = [response.message];
  }

  message: string[];

  code: string[];
}

class ErrorDto extends ResponseDto {
  constructor(response) {
    super(response);
    this.success = false;
  }

  success: boolean;
}

class SuccessDto extends ResponseDto {
  constructor(response, data) {
    super(response);
    this.success = true;
    this.data = data || {};
  }

  success: boolean;

  data: any;
}

export { SuccessDto, ErrorDto };

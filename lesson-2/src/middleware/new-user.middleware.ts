import { Injectable, NestMiddleware } from '@nestjs/common';
import { DataService } from "../services/data/data.service";
import {cloneDeep as _cloneDeep} from 'lodash';

@Injectable()
export class NewUserMiddleware implements NestMiddleware {

  constructor(private data: DataService) {
  }
  use(req: any, res: any, next: () => void) {
    const resultBody = _cloneDeep(req.body);
    req.body = this.data.transformCreateUser(resultBody);
    next();
  }
}

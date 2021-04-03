import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserController } from "./controllers/user/user.controller";
import { DataService } from "./services/data/data.service";
import { NewUserMiddleware } from "./middleware/new-user.middleware";


@Module({
    imports: [],
    controllers: [ UserController ],
    providers: [ DataService ],
})
export class AppModule {

    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(NewUserMiddleware)
            .forRoutes({ path: 'api/user', method: RequestMethod.POST });
    }
}

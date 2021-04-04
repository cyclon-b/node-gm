import { NewUserMiddleware } from './new-user.middleware';

describe('NewUserMiddleware', () => {
  it('should be defined', () => {
    expect(new NewUserMiddleware()).toBeDefined();
  });
});

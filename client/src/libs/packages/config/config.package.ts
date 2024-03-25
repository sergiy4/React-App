import { AppEnvironment } from '../../enums/enums';
import { type ValueOf } from '../../types/types';
import { type ConfigPackage, type EnvironmentSchema } from './libs/types/types';

class Config implements ConfigPackage {
  #ENV: EnvironmentSchema;

  public constructor() {
    this.#ENV = this.envSchema;
  }

  public get ENV(): EnvironmentSchema {
    return this.#ENV;
  }

  private get envSchema(): EnvironmentSchema {
    return {
      APP: {
        ENVIRONMENT: import.meta.env['VITE_APP_NODE_ENV'] as ValueOf<
          typeof AppEnvironment
        >,
        PORT: Number(import.meta.env['VITE_APP_PORT']),
        HOST: import.meta.env['VITE_APP_HOST'] as string,
      },
      API: {
        SERVER: import.meta.env['VITE_API_SERVER'] as string,
        PATH: import.meta.env['VITE_API_PATH'] as string,
      },
    };
  }
}

export { Config };

import { AppEnvironment } from '../../../../enums/enums';
import { ValueOf } from '../../../../types/types';

type EnvironmentSchema = {
  APP: {
    ENVIRONMENT: ValueOf<typeof AppEnvironment>;
    PORT: number;
    HOST: string;
  };
  API: {
    SERVER: string;
    PATH: string;
  };
};

export { type EnvironmentSchema };

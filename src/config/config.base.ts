/**
 * Base configuration of application,
 * 'config.ENV.ts' will override this configuration
 */
export const Config = {
  production: false,
  name: "SampleApp",
  title: "SampleApp",
  uri: {
    api: "api"
  },
  default: {
    displayCount: 20
  },
  urlHtml5Mode: true,
  version: "1.0.0"
};

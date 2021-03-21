/**
 * SETTINGS APP FROM JSON
 */
export class ApplicationConfig {  
  public graphiqlServer: string;
  constructor(options: {
    graphiqlServer?: string;
  }) {
    this.graphiqlServer = options.graphiqlServer || '';
  }
}
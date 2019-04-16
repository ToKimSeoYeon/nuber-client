import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}

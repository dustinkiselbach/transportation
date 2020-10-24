// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorText: string
      colorPrimary: string
      colorSecondary: string
      colorWhite: string
      colorOffWhite: string
    }
  }
}

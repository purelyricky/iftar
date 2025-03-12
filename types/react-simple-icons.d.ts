declare module 'react-simple-icons' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    title?: string;
  }
  
  export const SiInstagram: ComponentType<IconProps>;
  // Add other icon exports as needed
} 
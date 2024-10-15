


    export type Direction = "row" | "column"; // Define your Direction type as needed
    
    export interface FieldLayoutProps {
      label:string;
      id:string;
      direction?: Direction;
      required?:boolean;
      validationText?:string;
      validationState?:ValidityState;
      tooltip?:string;
      tooltipDuration?:number;
      tooltipPlacement?:Placement;
      children:(props: any) => React.ReactNode;

    }
  
    // Declare other exports as needed
    export const Placement: any; // Replace with actual type if known
    export const ValidationState: any; // Replace with actual type if known
  


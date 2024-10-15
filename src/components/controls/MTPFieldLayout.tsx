// import { DisplayProps } from ".";
// import MTPCleanFieldLayout from "./MTPCleanFieldLayout";
// import { FieldLayoutProps } from "../../@types/FieldLayout";
// import { ToolTipProps } from "../fields/event.type";
// import MTPColumnLayout from "./MTPColumnLayout";

// const MTPFieldLayout: React.FC<Omit<FieldLayoutProps, 'tooltipPlacement' | 'tooltip'> & 
//     ToolTipProps & 
//     Omit<DisplayProps, 'row'> & {
//         code?: string;
//         labelHtml?: React.ReactNode;
//         helpText?: string | null;
//         clean?: boolean;
//     }> = ({ clean = false, ...props }) => {
//         if (clean) {
//             return <MTPCleanFieldLayout {...props} />;
//         }
//         if (props.direction === 'column') {
//             return <MTPColumnLayout {...props} />;
//         }
//         return <MTPRowLayout {...props} />;
//     };

// // Set default props
// MTPFieldLayout.defaultProps = {
//     direction: 'column', // Default direction
//     required: false,     // Default required state
//     tooltipPlacement: 'right', // Default tooltip placement
//     tooltipDuration: 500, // Default tooltip duration
// };

// export default MTPFieldLayout;

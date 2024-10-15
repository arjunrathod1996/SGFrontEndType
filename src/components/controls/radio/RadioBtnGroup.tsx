import MTPFieldLayout from "../MTPFieldLayout";
import {RadioBtnProps} from '..'

function RadioBtnGroup({
    direction = 'column',
    name,
    onChange,
    options,
    getSelectValueFromOption = (option: any) => (option ? option : ''),
    isOptionalEqual = (opt1: string, opt2: string) => opt1 === opt2,
    renderOptionContent = (option: string) => (option ? option : ''),
    ...props
}: RadioBtnProps): JSX.Element {
    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>, option: string) => {
        if (onChange) {
            onChange(e.target.name, option, 'radio');
        }
    };

    return (
        <>
            {
                !props.hidden && (
                    <MTPFieldLayout
                        id={name}
                        col={props.display.col}
                        direction={direction}
                        className={props.display.className}
                        {...props}
                    >
                        {
                            () => {
                                if (props.readOnlyDisplayBadge) {
                                    return (
                                        <div className="badge-input">
                                            <input 
                                                name={name} 
                                                className={`form-control from-control-md`} 
                                                readOnly={props.readOnly} 
                                            />
                                            <span className="badge badge-discreet-primary badge-prepend-square ml-3">
                                                {props.value ? getSelectValueFromOption(props.value) : '-'}
                                            </span>
                                        </div>
                                    );
                                }
                                return (
                                    <div className="d-flex">
                                        <div className="btn-group btn-group-toggle">
                                            {
                                                options.map(option => {
                                                    const labelClassName = isOptional(option, props.value?.toString()!)
                                                        ? 'btn btn-primary'
                                                        : 'btn btn-outline-primary';
                                                    return (
                                                        <span key={getSelectValueFromOption(option)}>
                                                            <input 
                                                                className="btn-check"
                                                                type="radio"
                                                                name={name}
                                                                id={`${name}_${getSelectValueFromOption(option)}`}
                                                                onChange={e => handleCheckChange(e, option)}
                                                                checked={isOptionalEqual(option, props.value?.toString()!)}
                                                                disabled={props.readOnly}
                                                                onBlur={props.onBlur}
                                                                hidden={true}
                                                            />
                                                            {!props.readOnly ? (
                                                                <label 
                                                                    className={labelClassName} 
                                                                    htmlFor={`${name}_${getSelectValueFromOption(option)}`}
                                                                >
                                                                    {renderOptionContent(option)}
                                                                </label>
                                                            ) : (
                                                                <button className={labelClassName} disabled>
                                                                    {renderOptionContent(option)}
                                                                </button>
                                                            )}
                                                        </span>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            }
                        }
                    </MTPFieldLayout>
                )
            }
        </>
    );
}

export default RadioBtnGroup;

import {FormattedMessage} from 'react-intl';
import { Button } from 'reactstrap';

//import styles from './Error.module.css';
import { useHistory } from 'react-router-dom';

//const contactUs = window.env.CONTACT_US;

const ErrorComponent = () => {
    const history = useHistory();
    return (
        <div
          className={`d-flex flex-column`} data-testid="internal-error-content" >
            <section >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-2 bg-white pt-5 pb-4 py-lg-0'>
                            <span className={`mt-n3 d-block d-lg-none text-primary-alt font-weight-medium`} >500</span>
                        </div>
                        <div className='col-lg-5 bg-white d-flex flex-column justify-content-between'>
                            <div>
                                <h1 className='d-none d-lg-block display-2 font-weight-medium line-height-1 pt-0 pb-3'>
                                    <FormattedMessage  id="internalError"/>
                                </h1>
                            </div>
                        </div>
                        <div className='mb-5 d-none d-md-flex'>
                            <Button
                                className='btn btn-xl btn-primary' onClick={history.goBack} data-testid="try-again-md">
                                    <FormattedMessage id="interalErrorTryAgain"></FormattedMessage>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorComponent;
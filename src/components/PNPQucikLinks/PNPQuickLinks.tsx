import { FunctionComponent, ReactElement } from "react";
import { useIntl } from "react-intl";
import { Col, Row } from "reactstrap";




const PNPQuickLinks: FunctionComponent = (): ReactElement => {
    const {locale, formatMessage} = useIntl();
    const quickLinks = [
        {
            value : formatMessage({ id : 'pnp.home.accessRequest'}),
            link: window.env.SG_IAM,
        },
        {
            value : formatMessage({ id : 'pnp.home.sgCode'}),
            link: locale === 'en' ?  window.env.SG_CODE_EN : window.env.SG_CODE_FR,
        },
        {
            value : formatMessage({ id : 'pnp.home.cplPortal'}),
            link: locale === 'en' ?  window.env.CPLE_PORTAL_EN : window.env.CPLE_PORTAL_FR,
        },
        {
            value : formatMessage({ id : 'pnp.home.userGuide'}),
            link: locale === 'en' ?  window.env.USER_GUIDE__EN : window.env.USER_GUIDE_FR,
        },
    ];

    const onClickLink = (link: string) => {
        window.open(link,'_blank');
    };

    return(
        <Row style={{marginTop: '20px', marginBottom:'16px'}} >
            {
                quickLinks.map(tempKpi => (
                    <div key={tempKpi.value} onClick={() => onClickLink(tempKpi.link)} tabIndex={0}>
                        <Col>
                            <div className="hoverClass links">
                                {tempKpi.value}
                                <i className="icon icon-md icon-style">arrow_forward</i>
                            </div>
                        </Col>
                    </div>
                ))
            }
        </Row>
    );
};

export default PNPQuickLinks;
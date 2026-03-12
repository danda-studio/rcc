export const getTrackingParams = () => {
    const params = new URLSearchParams(window.location.search);

    const utm = {
        utmSource: params.get("utm_source"),
        utmMedium: params.get("utm_medium"),
        utmCampaign: params.get("utm_campaign"),
        utmContent: params.get("utm_content"),
        utmTerm: params.get("utm_term"),
        gclid: params.get("gclid"),
        fbclid: params.get("fbclid"),
        yclid: params.get("yclid"),
        ttclid: params.get("ttclid"),
        clickId: params.get("click_id"),
    };

    return Object.fromEntries(
        Object.entries(utm).filter(([, value]) => value !== null),
    );
};
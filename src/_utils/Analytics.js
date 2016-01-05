const nullFunc = () => {};
const analytics = window.ga || nullFunc;

export const trackUserId = userId =>
    analytics('set', 'userId', userId);

export const trackRoute = route =>
    analytics('send', 'pageview', route);

export const trackEvent = fields =>
    analytics('send', {
        hitType: 'event',
        ...fields,
    });

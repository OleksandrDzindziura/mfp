import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                console.log('Container noticed navigation in Marketing');
                if (pathname !== nextPathname) {
                    console.log('Container noticed navigation in Marketing');
                    history.push(nextPathname);
                }
            },
        });

        history.listen(onParentNavigate);
    }, []);
    console.log('dasd')
    return <div ref={ref} />;
};

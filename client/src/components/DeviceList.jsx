import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const {device} = useContext(Context);

    return (
        <div className="d-flex flex-wrap">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device} />                
            )}
        </div>
    )
});

export default DeviceList;
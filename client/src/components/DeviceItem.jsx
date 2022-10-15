import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className="mt-4 pe-2 ps-2">
            <Card
                style={{ cursor: "pointer" }}
                className="p-3"
                onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
            >
                <Image width={150} height={150} src={device.img} className="m-auto" />
                <div>
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary">
                            Samsung
                        </span>
                        <div>
                            {device.rating}
                        </div>
                    </div>
                    <div>
                        {device.name}
                    </div>
                </div>
            </Card>
        </Col>
    )
};

export default DeviceItem;

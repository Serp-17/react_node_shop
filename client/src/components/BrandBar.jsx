import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Card } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    console.log(device)
    return (
        <div className="d-flex justify-content-start">
            {device.brands.map(brand => 
                <Card
                    key={brand.id}
                    style={{ cursor: "pointer" }}
                    className="me-2 p-2"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "primary" : ""}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    )
});

export default BrandBar;

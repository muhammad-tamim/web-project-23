import React from 'react';
import Button from '../../../../shared/components/ui/Button';
import PhonesCard from '../PhonesCard/PhonesCard';

const Phones = () => {
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                <PhonesCard></PhonesCard>
                <PhonesCard></PhonesCard>
                <PhonesCard></PhonesCard>
            </div>

            <Button label={"ShowLess"} ></Button>
        </div >
    );
};

export default Phones;
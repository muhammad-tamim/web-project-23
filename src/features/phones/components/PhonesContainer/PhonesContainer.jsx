import React, { useEffect, useState } from 'react';
import Button from '../../../../shared/components/ui/Button';
import PhonesCard from '../PhonesCard/PhonesCard';

const Phones = ({ phones }) => {
    const [displayPhones, setDisplayPhones] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        if (showAll) {
            setDisplayPhones(phones)
        } else {
            setDisplayPhones(phones.slice(0, 6))
        }
    }, [phones, showAll])

    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => <PhonesCard phone={phone} key={phone.id}></PhonesCard>)
                }
            </div>


            <Button type='submit' onClick={() => {
                setShowAll(prv => !prv)
                if (showAll) window.scrollTo(0, 410)
            }} label={showAll ? "ShowLess" : "Show All"} ></Button>
        </div >
    );
};

export default Phones;
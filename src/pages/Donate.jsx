// DonateForm.js
import Layout from '@/components/Layout';
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';


export const Donate = () => {
    const [donationAmount, setDonationAmount] = useState(0);
    const navigate = useNavigate();

    const handleDonation = (e) => {
        e.preventDefault();
        // Redirect to the payment processing page
        navigate('/donation-payment'); // Change '/payment-processing' to your actual payment processing page route
        console.log(`Donation of $${donationAmount} processed!`);
    };

    const cardData = [
        {
            title: 'Card Title',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ducimus voluptas facere vitae consequatur cum aperiam ex, officia dolorum, atque quas necessitatibus. Harum, iusto officia perspiciatis quos unde mollitia placeat.',
        },
        {
            title: 'Card Title',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ducimus voluptas facere vitae consequatur cum aperiam ex, officia dolorum, atque quas necessitatibus. Harum, iusto officia perspiciatis quos unde mollitia placeat.',
        },
        {
            title: 'Card Title',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ducimus voluptas facere vitae consequatur cum aperiam ex, officia dolorum, atque quas necessitatibus. Harum, iusto officia perspiciatis quos unde mollitia placeat.',
        },
    ];

    return (
        <div className='bg-primary'>
            <Layout>
                <div className='bg-white p-5 py-10 flex flex-col gap-6'>
                    <h2>Make a Donation</h2>
                    {cardData.map((card, index) => (
                        <Card key={index} className="bg-secondary">
                            <CardHeader>
                                <CardTitle>{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{card.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" onClick={handleDonation}>Donate</Button>
                            </CardFooter>
                        </Card>
                    ))
                    }
                </div>
            </Layout>
        </div>
    );
}

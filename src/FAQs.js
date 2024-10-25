import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const FaqContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FaqItem = styled.div`
    margin-bottom: 15px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
`;

const Question = styled.h3`
    font-family: 'Dosis', sans-serif;
    font-size: 18px;
    cursor: pointer;
    color: #333;

    &:hover {
        color: #4CAF50;
    }
`;

const Answer = styled.p`
    font-family: 'Dosis', sans-serif;
    font-size: 16px;
    color: #666;
    margin-top: 5px;
`;

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return any item within 30 days of purchase for a full refund."
        },
        {
            question: "How do I track my order?",
            answer: "Once your order has shipped, you will receive an email with a tracking link."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to over 100 countries worldwide."
        },
        {
            question: "Can I change my order after placing it?",
            answer: "You can change your order within 1 hour of placing it by contacting customer service."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <FaqContainer>
            {faqs.map((faq, index) => (
                <FaqItem key={index}>
                    <Question onClick={() => toggleFaq(index)}>
                        {faq.question}
                    </Question>
                    {openIndex === index && <Answer>{faq.answer}</Answer>}
                </FaqItem>
            ))}
        </FaqContainer>
    );
};

export default FAQs;

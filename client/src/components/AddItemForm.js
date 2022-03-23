import { Alert, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';

export default function AddItemForm() {
    const [addItemData, setItemData] = useState({
        name: '',
        price: '',
        quantity: '',
        threshold: '',
        category: '',
    });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [addItem, { error, data }] = useMutation(ADD_ITEM);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        let updatedValue = '';
        if (name === 'price' || name === 'quantity' || name === 'threshold') {
            updatedValue = parseInt(value);
        } else {
            updatedValue = value;
        }
        setItemData({ ...addItemData, [name]: updatedValue });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log(addItemData);
        const formattedData = {
            name: addItemData.name,
            price: parseInt(addItemData.price),
            quantity: parseInt(addItemData.quantity),
            threshold: parseInt(addItemData.threshold),
            category: addItemData.category,
        };
        console.log(formattedData);
        let error = false;
        try {
            const { dataResponse } = await addItem({
                variables: { ...addItemData },
            });
        } catch (e) {
            console.log('in error');
            console.log(JSON.stringify(e, null, 2));
            error = true;
        }
        if (!error) {
            window.location = '/inventory';
        }

        // clear form values
        setItemData({
            name: '',
            price: '',
            quantity: '',
            threshold: '',
            category: '',
            email: '',
        });
    };
    return (
        <>
            <div className="min-h-full">
                <div className="py-10">
                    <header>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                                Add Item
                            </h1>
                        </div>
                    </header>
                    <main className={'form-wrap'}>
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleFormSubmit}
                            className={'form'}
                        >
                            <Alert
                                dismissible
                                onClose={() => setShowAlert(false)}
                                show={showAlert}
                                variant="danger"
                            >
                                Something went wrong with your login
                                credentials!
                            </Alert>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    onChange={handleInputChange}
                                    value={addItemData.name}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Name is required!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="price">Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Price"
                                    name="price"
                                    onChange={handleInputChange}
                                    value={addItemData.price}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Price is required!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="quantity">
                                    Quantity
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Quantity"
                                    name="quantity"
                                    onChange={handleInputChange}
                                    value={addItemData.quantity}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Quantity is required!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="price">
                                    Threshold
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Threshold"
                                    name="threshold"
                                    onChange={handleInputChange}
                                    value={addItemData.threshold}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Threshold is required!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="category">
                                    Category
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Category"
                                    name="category"
                                    onChange={handleInputChange}
                                    value={addItemData.category}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Category is required!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button
                                disabled={
                                    !(addItemData.name && addItemData.threshold)
                                }
                                type="submit"
                                variant="success"
                            >
                                Submit
                            </Button>
                        </Form>
                    </main>
                </div>
            </div>
        </>
    );
}
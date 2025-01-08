import { faker } from '@faker-js/faker';

export const generateInvalidEmails = (): string[] => {
    const validEmail = faker.internet.email();

    return [
        ` ${validEmail}`, 
        `${validEmail} `, 
        validEmail.replace('@', ''), 
        validEmail.replace('.', ''), 
        validEmail.replace('@', '@@'), 
        validEmail.replace(/\.\w+$/, ''), 
        validEmail.replace(/\.\w+$/, '.'), 
    ];
};
const axios = require('axios');

const BASE_URL = 'https://fpay-back.onrender.com/api/v1';

async function testCompanySettings() {
    console.log('Testing Company Settings API...\n');

    try {
        // Test 1: Get company settings
        console.log('1. Testing GET /company-settings');
        const getResponse = await axios.get(`${BASE_URL}/company-settings`);
        console.log('Response:', getResponse.data);
        console.log('✅ GET /company-settings successful\n');

        // Test 2: Update company settings
        console.log('2. Testing PUT /company-settings');
        const updateData = {
            defaultAddress: 'hyderabad',
            vijayawadaAddress: {
                street: "Fortune Heights, 52-1 / 8-11, Plot No's-8 & 9, Road No-2, ESI Rd, beside Hotel Park N",
                city: "NTR Colony, Vijayawada, Andhra Pradesh 520008"
            },
            hyderabadAddress: {
                street: "7th Floor, Q3, A2, Cyber Towers, Madhapur",
                city: "Hyderabad - 500081, Telangana"
            }
        };
        
        const putResponse = await axios.put(`${BASE_URL}/company-settings`, updateData);
        console.log('Response:', putResponse.data);
        console.log('✅ PUT /company-settings successful\n');

        // Test 3: Get payslip address
        console.log('3. Testing GET /payslip-address');
        const addressResponse = await axios.get(`${BASE_URL}/payslip-address`);
        console.log('Response:', addressResponse.data);
        console.log('✅ GET /payslip-address successful\n');

        console.log('🎉 All tests passed!');

    } catch (error) {
        console.error('❌ Test failed:', error.response?.data || error.message);
    }
}

testCompanySettings(); 
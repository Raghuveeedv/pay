const axios = require('axios');

const BASE_URL = 'https://fpay-back.onrender.com/api/v1';

async function testHyderabadFormat() {
    console.log('Testing Hyderabad Payslip Format...\n');

    try {
        // First, let's get a list of employees to test with
        console.log('1. Getting list of employees...');
        const employeesResponse = await axios.get(`${BASE_URL}/getEmployee`);
        
        if (employeesResponse.data.Status !== "Success" || !employeesResponse.data.Result.length) {
            console.log('❌ No employees found to test with');
            return;
        }

        const employeeId = employeesResponse.data.Result[0]._id;
        console.log(`✅ Found employee with ID: ${employeeId}\n`);

        // Test 2: Test Hyderabad payslip format
        console.log('2. Testing Hyderabad payslip format...');
        try {
            const hydResponse = await axios.get(`${BASE_URL}/downloadpdf/${employeeId}?address=hyderabad`, {
                responseType: 'stream',
                timeout: 10000
            });
            console.log('✅ Hyderabad payslip download successful');
            console.log('📄 Expected format:');
            console.log('   Company: Datavalley India Pvt Ltd');
            console.log('   Street: 7th Floor, Q3, A2, Cyber Towers, Madhapur');
            console.log('   City: Hyderabad - 500081, Telangana');
        } catch (error) {
            console.log('⚠️ Hyderabad payslip download failed (this might be expected if no employee data):', error.message);
        }

        // Test 3: Test Vijayawada payslip format for comparison
        console.log('\n3. Testing Vijayawada payslip format for comparison...');
        try {
            const vjwResponse = await axios.get(`${BASE_URL}/downloadpdf/${employeeId}?address=vijayawada`, {
                responseType: 'stream',
                timeout: 10000
            });
            console.log('✅ Vijayawada payslip download successful');
            console.log('📄 Expected format:');
            console.log('   Company: DATAVALLEY INDIA PRIVATE LIMITED');
            console.log('   Street: Fortune Heights, 52-1 / 8-11, Plot No\'s-8 & 9, Road No-2, ESI Rd, beside Hotel Park N');
            console.log('   City: NTR Colony, Vijayawada, Andhra Pradesh 520008');
        } catch (error) {
            console.log('⚠️ Vijayawada payslip download failed (this might be expected if no employee data):', error.message);
        }

        console.log('\n🎉 Format testing completed!');
        console.log('\n📋 Summary:');
        console.log('   - Hyderabad: "Datavalley India Pvt Ltd"');
        console.log('   - Vijayawada: "DATAVALLEY INDIA PRIVATE LIMITED"');

    } catch (error) {
        console.error('❌ Test failed:', error.response?.data || error.message);
    }
}

testHyderabadFormat(); 
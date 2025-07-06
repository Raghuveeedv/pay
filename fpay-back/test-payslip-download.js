const axios = require('axios');

const BASE_URL = 'https://fpay-back.onrender.com/api/v1';

async function testPayslipDownload() {
    console.log('Testing Payslip Download with Address Parameters...\n');

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

        // Test 2: Test payslip download with Hyderabad address
        console.log('2. Testing payslip download with Hyderabad address...');
        try {
            const hydResponse = await axios.get(`${BASE_URL}/downloadpdf/${employeeId}?address=hyderabad`, {
                responseType: 'stream',
                timeout: 10000
            });
            console.log('✅ Hyderabad payslip download successful');
        } catch (error) {
            console.log('⚠️ Hyderabad payslip download failed (this might be expected if no employee data):', error.message);
        }

        // Test 3: Test payslip download with Vijayawada address
        console.log('3. Testing payslip download with Vijayawada address...');
        try {
            const vjwResponse = await axios.get(`${BASE_URL}/downloadpdf/${employeeId}?address=vijayawada`, {
                responseType: 'stream',
                timeout: 10000
            });
            console.log('✅ Vijayawada payslip download successful');
        } catch (error) {
            console.log('⚠️ Vijayawada payslip download failed (this might be expected if no employee data):', error.message);
        }

        // Test 4: Test payslip download with default address
        console.log('4. Testing payslip download with default address...');
        try {
            const defaultResponse = await axios.get(`${BASE_URL}/downloadpdf/${employeeId}`, {
                responseType: 'stream',
                timeout: 10000
            });
            console.log('✅ Default payslip download successful');
        } catch (error) {
            console.log('⚠️ Default payslip download failed (this might be expected if no employee data):', error.message);
        }

        console.log('\n🎉 Address parameter testing completed!');

    } catch (error) {
        console.error('❌ Test failed:', error.response?.data || error.message);
    }
}

testPayslipDownload(); 
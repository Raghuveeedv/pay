const axios = require('axios');

// Test with localhost instead of deployed URL
const BASE_URL = 'http://localhost:8081/api/v1'; // Your server port

async function testLocalHyderabad() {
    console.log('Testing Local Hyderabad Payslip Format...\n');

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
            console.log('⚠️ Hyderabad payslip download failed:', error.message);
        }

        console.log('\n🎉 Local testing completed!');

    } catch (error) {
        console.error('❌ Test failed:', error.response?.data || error.message);
        console.log('\n💡 Make sure your local server is running on port 3001');
    }
}

testLocalHyderabad(); 
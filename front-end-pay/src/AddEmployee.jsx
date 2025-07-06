import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
  const [data, setData] = useState({
    month: '',
    name: '',
    email: '',
    dateofjoined: '',
    password: '',
    image: '',
    employeecode: '',
    area: '',
    department: '',
    designation: '',
    pfuna: '',
    esinum: '',
    bankname: '',
    bankacc: '',
    daysinmonth: '',
    daysworked: '',
    fixedctc: '',
    salaryfix: '',
    salaryearn: '',
    hrafix: '',
    hraearn: '',
    conallowancefix: '',
    conallowanceearn: '',
    bonusfix: '',
    bonusearn: '',
    splallowancefix: '',
    splallowanceearn: '',
    medallowancefix: '',
    medallowanceearn: '',
    petallowancefix: '',
    petallowanceearn: '',
    othallowancefix: '',
    othallowanceearn: '',
    nats: '',
    fullattenfix: '',
    fullattenearn: '',
    perbonusfix: '',
    perbonusearn: '',
    otfix: '',
    otearn: '',
    pf: '',
    esi: '',
    pt: '',
    tds: '',
    advance: '',
    late: '',
    mobile: '',
    medinsu: '',
    othdeduct: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('month', data.month);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('dateofjoined', data.dateofjoined);
    formData.append('password', data.password);
    formData.append('image', data.image);
    formData.append('employeecode', data.employeecode);
    formData.append('area', data.area);
    formData.append('department', data.department);
    formData.append('designation', data.designation);
    formData.append('pfuna', data.pfuna);
    formData.append('esinum', data.esinum);
    formData.append('bankname', data.bankname);
    formData.append('bankacc', data.bankacc);
    formData.append('daysinmonth', data.daysinmonth);
    formData.append('daysworked', data.daysworked);
    formData.append('fixedctc', data.fixedctc);
    formData.append('salaryfix', data.salaryfix);
    formData.append('salaryearn', data.salaryearn);
    formData.append('hrafix', data.hrafix);
    formData.append('hraearn', data.hraearn);
    formData.append('conallowancefix', data.conallowancefix);
    formData.append('conallowanceearn', data.conallowanceearn);
    formData.append('bonusfix', data.bonusfix);
    formData.append('bonusearn', data.bonusearn);
    formData.append('splallowancefix', data.splallowancefix);
    formData.append('splallowanceearn', data.splallowanceearn);
    formData.append('medallowancefix', data.medallowancefix);
    formData.append('medallowanceearn', data.medallowanceearn);
    formData.append('petallowancefix', data.petallowancefix);
    formData.append('petallowanceearn', data.petallowanceearn);
    formData.append('othallowancefix', data.othallowancefix);
    formData.append('othallowanceearn', data.othallowanceearn);
    formData.append('fullattenfix', data.fullattenfix);
    formData.append('fullattenearn', data.fullattenearn);
    formData.append('perbonusfix', data.perbonusfix);
    formData.append('perbonusearn', data.perbonusearn);
    formData.append('otfix', data.otfix);
    formData.append('otearn', data.otearn);
    formData.append('pf', data.pf);
    formData.append('esi', data.esi);
    formData.append('pt', data.pt);
    formData.append('tds', data.tds);
    formData.append('advance', data.advance);
    formData.append('late', data.late);
    formData.append('mobile', data.mobile);
    formData.append('medinsu', data.medinsu);
    formData.append('nats', data.nats);

    formData.append('othdeduct', data.othdeduct);
    axios.post('https://fpay-back.onrender.com/api/v1/create', formData)
    .then((res) => {
      navigate('/dashboard/employee'); // Fixed typo
    })
    .catch((err) => console.log(err));
  
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Employee</h2>
      <form className="row g-3 w-50 py-4" onSubmit={handleSubmit}>
        <h4>General Info</h4>
        <div className="col-12">
          <label htmlFor="inputmonth" className="form-label">
            Present Month:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputmonth"
            placeholder="Enter Present month...."
            name='month'
            autoComplete="off"
            onChange={(e) => setData({ ...data, month: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Name"
            name='name'
            autoComplete="off"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputemail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputemail"
            placeholder="Enter email"
            name='email'
            autoComplete="off"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Enter Password"
            name='password'
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputdoj" className="form-label">
            Date Of Joined
          </label>
          <input
            type="text"
            className="form-control"
            id="inputdoj"
            name='dateofjoined'
            placeholder="Enter date of joined"
            autoComplete="off"
            onChange={(e) => setData({ ...data, dateofjoined: e.target.value })}
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label" htmlFor="inputGroupFile01">
            Select Image
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputemployeecode" className="form-label">
            Employee Code
          </label>
          <input
            type="text"
            className="form-control"
            id="inputemployeecode"
            placeholder="Employee Code"
            autoComplete="off"
            onChange={(e) => setData({ ...data, employeecode: e.target.value })}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputarea" className="form-label">
            Area
          </label>
          <input
            type="text"
            className="form-control"
            id="inputarea"
            placeholder="Enter Area"
            autoComplete="off"
            onChange={(e) => setData({ ...data, area: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputdepartment" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="inputdepartment"
            placeholder="Enter Department"
            autoComplete="off"
            onChange={(e) => setData({ ...data, department: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputdesignation" className="form-label">
            Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="inputdesignation"
            placeholder="Enter Designation"
            autoComplete="off"
            onChange={(e) => setData({ ...data, designation: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputpfuna" className="form-label">
            PF UNA
          </label>
          <input
            type="text"
            className="form-control"
            id="inputpfuna"
            placeholder="Enter pf una"
            autoComplete="off"
            onChange={(e) => setData({ ...data, pfuna: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputESI" className="form-label">
            ESI Number
          </label>
          <input
            type="text"
            className="form-control"
            id="inputESI"
            placeholder="Enter ESI"
            autoComplete="off"
            onChange={(e) => setData({ ...data, esinum: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputbankname" className="form-label">
            Bank Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputbankname"
            placeholder="Enter bankname"
            autoComplete="off"
            onChange={(e) => setData({ ...data, bankname: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputbankacc" className="form-label">
            Bank A/C Number
          </label>
          <input
            type="text"
            className="form-control"
            id="inputbankacc"
            placeholder="Enter bankacc"
            autoComplete="off"
            onChange={(e) => setData({ ...data, bankacc: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputdaysinmonth" className="form-label">
            Days in Month
          </label>
          <input
            type="text"
            className="form-control"
            id="inputdaysinmonth"
            placeholder="Enter daysinmonth"
            autoComplete="off"
            onChange={(e) => setData({ ...data, daysinmonth: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputdaysworked" className="form-label">
            Days Worked in this month
          </label>
          <input
            type="text"
            className="form-control"
            id="inputdaysworked"
            placeholder="Enter days worked"
            autoComplete="off"
            onChange={(e) => setData({ ...data, daysworked: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputfixedctc" className="form-label">
            Fixed CTC
          </label>
          <input
            type="text"
            className="form-control"
            id="inputfixedctc"
            placeholder="Enter fixedctc"
            autoComplete="off"
            onChange={(e) => setData({ ...data, fixedctc: e.target.value })}
          />
        </div>
        <h4>Salary Info</h4>
        <div className="col-12">
          <label htmlFor="inputsalaryfix" className="form-label">
            Basic Salary Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="inputsalaryfix"
            placeholder="Enter salaryfix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, salaryfix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputsalaryearn" className="form-label">
            Basic Salary Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="inputsalaryearn"
            placeholder="Enter salaryearn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, salaryearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputhrafix" className="form-label">
            HRA Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="inputhrafix"
            placeholder="Enter hrafix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, hrafix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputhraearn" className="form-label">
            HRA Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="inputhraearn"
            placeholder="Enter hraearn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, hraearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputconallowancefix" className="form-label">
            Conveyance Allowance Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="inputconallowancefix"
            placeholder="Enter conveyance allowancefix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, conallowancefix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputconallowanceearn" className="form-label">
            Conveyance Allowance Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="inputconallowanceearn"
            placeholder="Enter conveyance allowance earn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, conallowanceearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputbonusfix" className="form-label">
            Fixed Statutory Bonus/Exgratia Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="inputbonusfix"
            placeholder="Enter bonusfix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, bonusfix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputbonusearn" className="form-label">
            Fixed Statutory Bonus/Exgratia Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="inputbonusearn"
            placeholder="Enter bonusearn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, bonusearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="splallowancefix" className="form-label">
            Special/Other Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="splallowancefix"
            placeholder="Enter spl allowance fix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, splallowancefix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="splallowanceearn" className="form-label">
            Special/Other Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="splallowanceearn"
            placeholder="Enter spl allowance earn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, splallowanceearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="medallowancefix" className="form-label">
            Medical Allowance Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="medallowancefix"
            placeholder="Enter med allowance fix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, medallowancefix: e.target.value })}
          />
        </div>

        <div className="col-12">
          <label htmlFor="medallowanceearn" className="form-label">
            Medical Allowance Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="medallowanceearn"
            placeholder="Enter med allowance earn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, medallowanceearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="petallofix" className="form-label">
            Petrol Allowance Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="petallofix"
            placeholder="Enter petrol allowance fix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, petallowancefix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="petalloearn" className="form-label">
            Petrol Allowance Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="petalloearn"
            placeholder="Enter petrol allowance earn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, petallowanceearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="othallofix" className="form-label">
            Other Allowance Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="othallofix"
            placeholder="Enter Other allowance fix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, othallowancefix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="othalloearn" className="form-label">
            Other Allowance Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="othalloearn"
            placeholder="Enter Other allowance earn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, othallowanceearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="fullattenfix" className="form-label">
            Full Attendance Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="fullattenfix"
            placeholder="Enter Full Attendance fix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, fullattenfix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="fullattenearn" className="form-label">
            Full Attendance Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="fullattenearn"
            placeholder="Enter Full Attendance earn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, fullattenearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="perbonusfix" className="form-label">
            Performace Bonus Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="perbonusfix"
            placeholder="Enter perform bonus fix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, perbonusfix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="perbonusearn" className="form-label">
            Performace Bonus Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="perbonusearn"
            placeholder="Enter perform bonus earn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, perbonusearn: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="ottimefix" className="form-label">
            Overtime Fixed
          </label>
          <input
            type="text"
            className="form-control"
            id="ottimefix"
            placeholder="Enter Overtime fix"
            autoComplete="off"
            onChange={(e) => setData({ ...data, otfix: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="ottimeearn" className="form-label">
            Overtime Earned
          </label>
          <input
            type="text"
            className="form-control"
            id="ottimeearn"
            placeholder="Enter Overtime earn"
            autoComplete="off"
            onChange={(e) => setData({ ...data, otearn: e.target.value })}
          />
        </div>
        <h4>Deductions</h4>
        <div className="col-12">
          <label htmlFor="inputpf" className="form-label">
            PF
          </label>
          <input
            type="text"
            className="form-control"
            id="inputpf"
            placeholder="Enter pf"
            autoComplete="off"
            onChange={(e) => setData({ ...data, pf: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputesi" className="form-label">
            ESI
          </label>
          <input
            type="text"
            className="form-control"
            id="inputesi"
            placeholder="Enter esi"
            autoComplete="off"
            onChange={(e) => setData({ ...data, esi: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputpt" className="form-label">
            PT
          </label>
          <input
            type="text"
            className="form-control"
            id="inputpt"
            placeholder="Enter pt"
            autoComplete="off"
            onChange={(e) => setData({ ...data, pt: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputtds" className="form-label">
            TDS
          </label>
          <input
            type="text"
            className="form-control"
            id="inputtds"
            placeholder="Enter tds"
            autoComplete="off"
            onChange={(e) => setData({ ...data, tds: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputadvance" className="form-label">
            Advance
          </label>
          <input
            type="text"
            className="form-control"
            id="inputadvance"
            placeholder="Enter advance"
            autoComplete="off"
            onChange={(e) => setData({ ...data, advance: e.target.value })}
          />
        </div>
        <div className="col-12">
  <label htmlFor="inputnats" className="form-label">
    NATS Deduction (₹)
  </label>
  <input
    type="text"
    className="form-control"
    id="inputnats"
    placeholder="Enter NATS amount"
    autoComplete="off"
    onChange={(e) => setData({ ...data, nats: e.target.value })}
  />
</div>

        <div className="col-12">
          <label htmlFor="inputlate" className="form-label">
            Late
          </label>
          <input
            type="text"
            className="form-control"
            id="inputlate"
            placeholder="Enter late"
            autoComplete="off"
            onChange={(e) => setData({ ...data, late: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputmobile" placeholder='mobile phone usegae charges' className="form-label">
            Mobile Phones
          </label>
          <input
            type="text"
            className="form-control"
            id="inputmobile"
            placeholder="Enter mobile phone"
            autoComplete="off"
            onChange={(e) => setData({ ...data, mobile: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputmedinsu" className="form-label">
            Medical Incurence
          </label>
          <input
            type="text"
            className="form-control"
            id="inputmedinsu"
            placeholder="Enter medical insurence"
            autoComplete="off"
            onChange={(e) => setData({ ...data, medinsu: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="othdeduct" className="form-label">
            Other Deduction
          </label>
          <input
            type="text"
            className="form-control"
            id="othdeduct"
            placeholder="Enter other deductions"
            autoComplete="off"
            onChange={(e) => setData({ ...data, othdeduct: e.target.value })}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;

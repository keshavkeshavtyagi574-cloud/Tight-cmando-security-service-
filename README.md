# Tight-cmando-security-service-हाँ, अब सही नाम Tight Commando Security Service है। और आपकी बात के हिसाब से यह सिर्फ वेबसाइट नहीं, बल्कि Security Guard Management + Verification App/Portal होना चाहिए।

इसमें एक बहुत जरूरी बात है: Aadhaar की sensitive जानकारी को सीधे public database में रखना/दिखाना नहीं चाहिए। Verification को authorized/KYC-compliant तरीके से करना चाहिए और जरूरत से ज्यादा Aadhaar data store नहीं करना चाहिए।

आपके ऐप के लिए यह पूरा master prompt इस्तेमाल करें:

TIGHT COMMANDO SECURITY SERVICE — COMPLETE SECURITY GUARD MANAGEMENT APP

Build a professional, secure and scalable Security Guard Management & Verification App for Tight Commando Security Service.

The application must have separate dashboards for:

1. Super Admin / Owner
2. HR / Verification Team
3. Security Supervisors
4. Security Guards
5. Clients / Companies

The system must be designed for real-world security-agency operations.

---

1. GUARD REGISTRATION

When a new security guard joins Tight Commando Security Service, HR/Admin must be able to create a complete guard profile.

Required information:

Personal Details

- Full Name
- Father's / Mother's Name
- Date of Birth
- Gender
- Mobile Number
- Alternate Mobile Number
- Email
- Current Address
- Permanent Address
- Emergency Contact
- Blood Group
- Marital Status
- Profile Photograph
- Signature

Identity / KYC

Provide a secure KYC/identity-verification workflow.

Support:

- Aadhaar verification through a legally compliant/authorized verification method
- PAN
- Voter ID
- Driving Licence
- Passport
- Other government ID

Do NOT expose full Aadhaar numbers publicly.

Where legally permitted, store only the minimum required information, such as:

- Verification status
- Verification reference/transaction ID
- Masked identifier
- Verification date
- Verification source

Show clear status:

🟢 Verified
🟡 Pending
🔴 Failed / Requires Review

---

2. GUARD PHOTO & DOCUMENTS

Every guard must have a digital profile containing:

- Profile photo
- ID/KYC documents
- Address proof
- Police verification document
- Character certificate, where applicable
- Medical/fitness certificate, where applicable
- Training certificates
- Previous employment details
- Experience certificates
- Joining documents
- Signed employment documents

Documents must have:

- Upload date
- Expiry date where applicable
- Verification status
- Verified by
- Notes

Add automatic reminders before important documents expire.

---

3. POLICE VERIFICATION

Create a dedicated Police Verification module.

Fields:

- Police Verification Status
- Application/Reference Number
- Verification Date
- Police Station
- Verification Document
- Remarks
- Verified By

Statuses:

Pending / Submitted / Verified / Rejected / Expired

---

4. COMPLETE GUARD PROFILE

Create a professional digital Guard ID/Profile page.

Display:

- Guard Photo
- Guard Name
- Employee ID
- Designation
- Joining Date
- Current Posting
- Contact Number
- Verification Status
- Training Status
- Duty Status

Add a QR Code for the employee profile.

When an authorized user scans the QR code, show a limited verification page rather than exposing sensitive personal information.

---

5. EMPLOYEE ID CARD

Generate a digital employee ID card.

Front:

TIGHT COMMANDO SECURITY SERVICE
Guard Photo
Employee Name
Employee ID
Designation
Joining Date

Back:

Emergency Contact
Company Contact
QR Verification Code
Validity

Allow Admin to generate/download/print the ID card.

---

6. GUARD LOGIN

Every guard should have a secure login.

Guard dashboard:

- My Profile
- My Documents
- My ID Card
- My Duty Location
- Duty Schedule
- Attendance
- Leave
- Salary/Payslip
- Training
- Notifications
- Emergency Contact
- Change Password

Guards should NOT be able to edit sensitive verified information without HR approval.

---

7. ATTENDANCE SYSTEM

Create a complete guard attendance system.

Features:

- Check In
- Check Out
- Date & Time
- Duty Location
- GPS/location verification where legally appropriate
- Optional selfie verification
- Attendance history
- Late arrival
- Early departure
- Absent
- Overtime

Admin/Supervisor dashboard should show:

Present
Absent
Late
On Leave
Off Duty

---

8. DUTY / POST MANAGEMENT

Admin must be able to create security posts.

Example:

Client: ABC Factory
Location: Main Gate
Shift: 8 AM – 8 PM
Required Guards: 4

Assign specific guards to each post.

Show:

- Client
- Site
- Post
- Guard
- Shift
- Supervisor
- Duty status

---

9. SHIFT MANAGEMENT

Create shifts such as:

Morning
Evening
Night
12-Hour Shift
8-Hour Shift

Admin can:

- Create shifts
- Assign guards
- Change guards
- Approve replacements
- View shift history

Prevent accidental double-booking of the same guard.

---

10. SUPERVISOR APP

Supervisor dashboard should include:

- Assigned Sites
- Guards Under Supervisor
- Attendance
- Site Visits
- Guard Verification
- Incident Reports
- Complaints
- Shift Reports

Supervisor can submit:

- Site visit report
- Guard inspection
- Uniform inspection
- Attendance verification
- Incident report
- Client feedback

---

11. INCIDENT REPORTING

Create an Incident Management module.

A supervisor/authorized guard can report:

- Theft
- Unauthorized Entry
- Accident
- Fire
- Fight
- Security Breach
- Missing Property
- Medical Emergency
- Other Incident

Report fields:

- Incident Type
- Date
- Time
- Location
- Description
- People Involved
- Photos
- Supporting Documents
- Immediate Action Taken
- Supervisor Remarks
- Status

Status:

Open / Investigating / Resolved / Closed

Maintain a complete audit history.

---

12. CLIENT PORTAL

Clients should have their own login.

Client dashboard:

- Assigned Guards
- Current Duty Status
- Attendance
- Shift Information
- Incident Reports
- Complaints
- Site Information
- Monthly Reports
- Contact Supervisor

Clients should only see information related to their own sites.

---

13. COMPLAINT MANAGEMENT

Create a complaint/ticket system.

Client can submit:

- Guard complaint
- Attendance complaint
- Behaviour complaint
- Service complaint
- Other

Admin can assign complaint to supervisor.

Track:

Open → Assigned → In Progress → Resolved → Closed

Maintain timestamps and responsible staff.

---

14. TRAINING MANAGEMENT

Create a training module.

Track:

- Security Training
- Fire Safety
- First Aid
- Crowd Management
- Emergency Response
- Communication Skills
- Physical Training
- Site-Specific Training

Store:

- Training date
- Trainer
- Certificate
- Score/Result
- Expiry date

Send reminders for refresher training.

---

15. SALARY / PAYROLL

Create an optional payroll module.

Track:

- Basic Salary
- Overtime
- Allowances
- Deductions
- Attendance-based calculation
- Advance
- Net Salary
- Payslip

Generate downloadable payslips.

Payroll access must be restricted to authorized Admin/HR users.

---

16. DOCUMENT EXPIRY ALERTS

Automatic notifications for:

- ID/document expiry
- Police verification renewal
- Training certificate expiry
- Medical certificate expiry
- Licence expiry
- Contract expiry

Dashboard should show:

🔴 Expired
🟠 Expiring Soon
🟢 Valid

---

17. ADMIN DASHBOARD

Create a powerful dashboard showing:

Total Guards
Active Guards
Inactive Guards
Pending Verification
Verified Guards
Documents Expiring
Guards on Duty
Absent Guards
Total Sites
Total Clients
Open Incidents
Open Complaints

Include charts and filters.

---

18. SEARCH & FILTER

Admin should be able to search guards by:

- Name
- Employee ID
- Mobile
- Site
- Designation
- Verification Status
- Duty Status
- Joining Date

Add filters for:

Verified / Pending / Expired / Active / Inactive.

---

19. ROLE-BASED ACCESS CONTROL

Implement strict permissions.

SUPER ADMIN:
Full access.

HR:
Guard registration, documents, verification and employee records.

SUPERVISOR:
Assigned sites, attendance, inspections and incidents.

GUARD:
Own profile, attendance, duty and assigned features only.

CLIENT:
Only their company's assigned security information.

Never allow one client to access another client's data.

---

20. SECURITY & PRIVACY

Security is extremely important because the application contains personal information.

Implement:

- Secure authentication
- Role-based permissions
- Strong password policy
- OTP/2FA where appropriate
- Encrypted data in transit
- Secure document storage
- Audit logs
- Session timeout
- Login history
- Admin activity logs
- Backup system
- Data retention/deletion policy

Do not expose sensitive identity information through QR codes, URLs, search results or public pages.

Aadhaar verification must use an appropriate authorized/compliant verification process.

---

21. NOTIFICATION SYSTEM

Send notifications for:

- New guard registration
- Verification completed
- Document expiry
- Duty assignment
- Shift changes
- Attendance issues
- Incident reports
- Complaints
- Training reminders
- Important company announcements

Support in-app notifications and, where configured, SMS/WhatsApp/email integrations.

---

22. WEBSITE / PUBLIC LANDING PAGE

Create a professional public website for:

TIGHT COMMANDO SECURITY SERVICE

Sections:

Home
About Us
Services
Industries
Why Choose Us
Contact
Client Login
Guard Login

Hero:

“Professional Security. Trusted Protection.”

CTA buttons:

GET SECURITY SERVICES
CONTACT US

Services:

- Security Guards
- Corporate Security
- Industrial Security
- Residential Security
- Event Security
- Hospital Security
- School/College Security
- Warehouse Security
- Personal Security

---

23. ADMIN TECHNOLOGY

Build the system using a modern production-ready architecture.

Recommended:

Frontend:
React / Next.js

Backend:
Node.js / NestJS or equivalent secure backend

Database:
PostgreSQL

Authentication:
Secure session/JWT-based authentication with appropriate refresh-token handling

File Storage:
Private object storage with signed/temporary access URLs

Deployment:
Suitable cloud hosting + GitHub repository + CI/CD

The system must be responsive and work on:

Mobile
Tablet
Desktop

---

24. GITHUB PROJECT STRUCTURE

Create a clean GitHub repository with:

/frontend
/backend
/database
/docs
/tests

Include:

README.md
Environment configuration example
Database schema
API documentation
Setup instructions
Deployment instructions
Security documentation

Never commit:

Passwords
API keys
Aadhaar data
Private documents
Production credentials
Secrets

Use environment variables for all secrets.

---

25. FINAL REQUIREMENT

The application should feel like a professional commercial product for a real security agency.

It should NOT look like a simple demo or basic template.

Prioritize:

Security
Privacy
Reliability
Simple UI
Fast performance
Mobile usability
Professional design
Scalability
Auditability

Build the project in modules so additional features can be added later without rebuilding the entire application.

Before deployment, include proper testing for authentication, authorization, document access, tenant/client isolation, audit logging and sensitive-data protection.सबसे जरूरी: आपके ऐप में Guard का पूरा digital file + Aadhaar/KYC verification + photo + documents + police verification + ID card/QR + attendance + duty/shift + supervisor + client portal एक ही सिस्टम में रहेगा। यही आपके काम के लिए सही structure है।

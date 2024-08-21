import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Typography } from '@mui/material'

function PrivacyPolicy() {
    return (
        <>
            <Header />
            <Container>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Privacy Policy</Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Information Collection</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    We collect various types of information from users to facilitate the voting process
                    and improve our platform. This may include:<br />
                    a)	Personal data: such as your name, email address, date of birth, and gender provided during registration.<br />
                    b)	Voting preferences: data related to your voting activities, including the nominees you vote for and the frequency of your participation.<br />
                    c)	Device information: including your IP address, browser type, operating system, and device identifiers used to access the platform.<br />
                    d)	User-generated content: such as comments, reviews, or submissions you make on the Tuzo Za Tamthilia voting system.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Use of Information</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    The information we collect is used for the following purposes:<br />
                    a)	Facilitating the voting process and determining award recipients.<br />
                    b)	Analyzing user behavior to improve the functionality, usability, and performance of the Tuzo Za Tamthilia voting system.<br />
                    c)	Personalizing your experience on the platform, including providing tailored content, recommendations, and communications.<br />
                    d)	Communicating with you about updates, news, events, promotions, and other relevant information related to the Tanzania Music Awards.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Data Sharing</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    We may share user information with third parties under the following circumstances:<br />
                    a)	With sponsors, partners, or affiliates: to promote the Tuzo Za Tamthilia(Tuzo Za Tamthilia) or
                    enhance the voting experience, provided that these third parties agree to maintain the
                    confidentiality and security of your data.<br />
                    b)	With service providers: to assist us in operating, managing, and improving the Tuzo Za Tamthilia
                    voting system, subject to contractual agreements that require them to protect your
                    personal information.<br />
                    c)	In response to legal obligations: when required by law, regulation, legal process,
                    or governmental request, or to enforce our rights, protect our property, or ensure the
                    safety of our users.<br />
                    We do not sell or rent personal information to third parties for marketing purposes
                    without your explicit consent.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Data Security</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    We implement a variety of security measures to safeguard user information from
                    unauthorized access, alteration, or disclosure. These measures include:<br />
                    <br />
                    a)	Encryption: using industry-standard encryption protocols to protect data transmission over the internet.<br />
                    b)	Access controls: limiting access to user information to authorized personnel only, who are required to maintain the confidentiality of such data.<br />
                    c)	Regular security audits: conducting periodic reviews and assessments of our security practices to identify and address vulnerabilities.<br />
                    <br />
                    Despite our efforts to ensure the security of user information, no method of transmission over the internet or method of electronic storage is
                    entirely secure. Therefore, we cannot guarantee absolute security.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>User Rights</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    Users have certain rights regarding their personal data, including the right to:<br />
                    a)	Access: request access to the personal information we hold about you and receive a copy of such data.<br />
                    b)	Correction: request corrections to any inaccuracies or incomplete information in your personal data.<br />
                    c)	Deletion: request the deletion of your personal data from our records, subject to certain legal limitations.<br />
                    d)	Objection: object to the processing of your personal data for certain purposes, such as direct marketing.<br />
                    e)	Restriction: request restrictions on the processing of your personal data under certain circumstances, such as disputing the accuracy of the data or objecting to its processing.<br />
                    To exercise these rights or make inquiries about your personal information, please contact us using the information provided in the "Contact Information" section below.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Policy Updates</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    We may update this privacy policy from time to time to reflect changes in our practices,
                    legal requirements, or industry standards. Any updates will be posted on the Tuzo Za Tamthilia voting
                    system, and we will notify users of significant changes via email or through the platform.
                    We encourage you to review this privacy policy periodically to stay informed about how
                    we collect, use, and protect your personal information.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Contact Information</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    For inquiries, requests, or concerns regarding our privacy practices or this privacy policy, please contact us at:<br />
                    Tanzania Film Board<br />
                    info@tuzozatamthilia.co.tz<br />
                    +44 7916 736855<br />
                </Typography>
            </Container>
            <Footer />
        </>
    )
}

export default PrivacyPolicy
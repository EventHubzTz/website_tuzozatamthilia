import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Typography } from '@mui/material'

function TermsOfUse() {
    return (
        <>
            <Header />
            <Container>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Terms of Use</Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Acceptance of Terms</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    By accessing or using the Tanzania Music Awards (TMA) voting system, you acknowledge
                    that you have read, understood, and agree to abide by the terms of use outlined in
                    this document. Your continued use of the platform constitutes your acceptance of
                    these terms and any updates or modifications that may occur.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>User Conduct</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    Users of the TMA voting system are expected to conduct themselves in a respectful and
                    lawful manner at all times. Acceptable behavior includes but is not limited to:<br />
                    a)	Participating in the voting process with honesty and integrity.<br />
                    b)	Respecting the rights and opinions of other users.<br />
                    c)	Abiding by the rules and guidelines set forth by the administrators of the voting system. Prohibited behavior includes:<br />
                    d)	Engaging in any form of fraudulent activity or manipulation of the voting process.<br />
                    e)	Posting or sharing any content that is defamatory, offensive, or infringes upon the rights of others.<br />
                    f)	Disrupting the functionality of the voting system or interfering with the experience of other users.<br />
                    g)	Violating any applicable laws or regulations.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Intellectual Property</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    All intellectual property associated with the Tanzania Music Awards (TMA) voting system,
                    including but not limited to the website, platform, content, and user-generated submissions,
                    are owned by Aleco Group. Users retain ownership of their original content but grant TMA
                    voting system the right to use, reproduce, and distribute such content for the purposes of the voting process.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Termination</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    Access to the Tanzania Music Awards (TMA) voting system may be terminated or suspended
                    at any time, with or without cause, at the discretion of the administrators. Reasons
                    for termination may include but are not limited to:<br />
                    a)	Violation of the terms of use outlined in this document.<br />
                    b)	Engagement in abusive, harassing, or disruptive behavior.<br />
                    c)	Any activity that compromises the integrity or security of the
                    voting system. Upon termination, users are prohibited from accessing
                    or using the platform, and any remaining voting privileges may be revoked.<br />
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Governing Law</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    These terms of use are governed by and construed in accordance with the laws of Tanzania.
                    Any disputes arising from or relating to these terms shall be subject to the exclusive
                    jurisdiction of the courts in Tanzania.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Contact Information</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    For inquiries, assistance, or to report any violations of these terms of use, please contact
                    the administrators of the Tanzania Music Awards (TMA) voting system at:<br />
                    Tanzania National Arts Council<br />
                    sss@basata.go.tz<br />
                    +255766666666
                </Typography>
            </Container>
            <Footer />
        </>
    )
}

export default TermsOfUse
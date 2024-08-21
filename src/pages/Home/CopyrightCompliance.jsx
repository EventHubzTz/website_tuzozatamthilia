import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Typography } from '@mui/material'

function CopyrightCompliance() {
    return (
        <>
            <Header />
            <Container>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Copyright Notice</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    The Tuzo Za Tamthilia(TMA) voting system, including its website,
                    platform, content, and voting processes, is the intellectual property
                    of Aleco Group. All rights are reserved and protected by Tanzanian
                    copyright laws and international treaties. Any unauthorized use,
                    reproduction, distribution, or modification of copyrighted materials
                    associated with the TMA voting system is strictly prohibited and may
                    result in legal action.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Compliance Statement</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    The TMA voting system is fully committed to complying with all relevant
                    copyright laws and regulations in Tanzania. We uphold the principles of
                    fair use, fair dealing, and respect for intellectual property rights. Our
                    team diligently ensures that all content and materials featured on the
                    platform are either original creations or appropriately licensed for use.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Usage Rights</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    Users of the TMA voting system are granted limited rights to access and utilize
                    copyrighted materials solely for the purpose of participating in the voting process.
                    This includes viewing, interacting with, and voting on content provided on the platform.
                    However, users are strictly prohibited from engaging in any unauthorized reproduction,
                    distribution, or modification of copyrighted materials without explicit permission from
                    the copyright owner.
                </Typography>
                <Typography color="white" variant='h6' sx={{ mb: 4 }}>Reporting Copyright Infringement</Typography>
                <Typography color="white" sx={{ mb: 4 }}>
                    We take allegations of copyright infringement seriously and have established a streamlined
                    procedure for reporting suspected violations. If you believe that your copyrighted work has
                    been used in a manner that constitutes infringement within the TMA voting system, please
                    follow these steps:<br />
                    <br />
                    1.	Submit a written notification containing:<br />
                    a)	Identification of the copyrighted work alleged to have been infringed.<br />
                    b)	Description of the infringing material and its location within the TMA voting system.<br />
                    c)	Contact information of the copyright owner or authorized representative.<br />
                    d)	A statement affirming that the use of the material is not authorized by the copyright owner, its agent, or the law.<br />
                    e)	A statement made under penalty of perjury that the information provided is accurate and that you are authorized to act on behalf of the copyright owner.<br />
                    <br />
                    2.	Send the notification to the designated copyright agent at sss@basata.go.tz
                </Typography>
                <Typography color="white">
                    Upon receipt of a valid notification, we will promptly investigate the alleged
                    infringement and take appropriate action in accordance with applicable laws and regulations.
                </Typography>
                <Typography color="white">
                    Contact Information: For copyright-related inquiries, reports of infringement,
                    or further assistance, please don't hesitate to contact us at:<br />
                    Tanzania Film Board<br />
                    info@tuzozatamthilia.co.tz<br />
                    +44 7916 736855<br />
                </Typography>
            </Container>
            <Footer />
        </>
    )
}

export default CopyrightCompliance
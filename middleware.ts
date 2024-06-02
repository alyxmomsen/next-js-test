
import jwt from 'jsonwebtoken' ;

// jwt.sign('foo' ,'bar');

import {NextRequest  ,NextResponse} from 'next/server' 

export default async function my_mw (req:NextRequest , res:NextResponse) {

    const response = NextResponse.next();

    if(req.nextUrl.pathname === '/') {

        const at = req.cookies.get('access_token') ;

        if(at) {

            console.log('token exist');
        }
        else {

            // const token = jwt.sign({foo:'bar'} , 'SECRET_KEY');

            // res.cookies.set('token' , 'token' , {

            //     expires:new Date(Date.now() + 5000)
            // })

            console.log(res);

            console.log('no token');
        }

        console.log('hello from the middleware');
    }

    return response ;
}


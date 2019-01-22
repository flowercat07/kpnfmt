# kpnfmt
대한민국 전화번호 포매터


import { phoneNumberSplitWithString } from "kpnfmt"


phoneNumberSplitWithString({phone number:string}, {split-string:string})

ex.
phoneNumberSplitWithString("01034567890","-")
//output 010-3456-7890

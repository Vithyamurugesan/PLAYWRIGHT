# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DATADRIVENUSINGJSON\DemoBlazeTest.test.ts >> Invalid Login-admin||"Blank Username"}
- Location: tests\DATADRIVENUSINGJSON\DemoBlazeTest.test.ts:18:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Wrong password"
Received: "Wrong password."
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import loginData from "../test-data/loginData.json" with { type: "json" };
  3  | 
  4  | //Interface for JSON data 
  5  | 
  6  | interface LoginData{
  7  |     testName:string;
  8  |     username:string;
  9  |     password:string;
  10 |     expectedResult:"Success"|"Failure";
  11 |     expectedMessage:string;
  12 | }
  13 | 
  14 | //type casting 
  15 | const user=loginData as LoginData[];
  16 | console.log(user);
  17 | for(const data of user){
  18 |     test(`${data.testName}-${data.username}||"Blank Username"}`,async({page})=>{
  19 |         await page.goto("https://www.demoblaze.com/");
  20 |         await page.click("#login2");
  21 |         await page.fill("#loginusername",data.username);
  22 |         await page.fill("#loginpassword",data.password);
  23 |         if(data.expectedResult==="Failure"){
  24 |             page.once("dialog",async dialog =>{
> 25 |                 expect(dialog.message()).toBe(data.expectedMessage);
     |                                          ^ Error: expect(received).toBe(expected) // Object.is equality
  26 |                 await dialog.accept();
  27 |             });
  28 |         }
  29 |         await page.click("button[onclick='logIn()']");
  30 |         if(data.expectedResult==="Success"){
  31 |             await page.waitForTimeout(2000);
  32 |             await expect(page.locator("#nameofuser")).toBeVisible({timeout:10000});
  33 |             await expect(page.locator("#nameofuser")).toContainText(`Welcome ${data.username}`);
  34 |         }
  35 | 
  36 |     });
  37 | }
```
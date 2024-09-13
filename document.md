# Linting Errors and Resolutions

## Initial Linting Errors and Warnings

Upon running `ng lint` on the project, the following issues were identified:

- **Total Errors Found**: 5
- **Total Warnings Found**: 4
- **Error**: 1

### Errors and Warnings Breakdown

1. **Warnings Related to Single Quotes**
   - **Location**: `app.component.ts` and `app.component.spec.ts`
   - **Issue**: The code used double quotes in some places where single quotes were expected according to the project's style guide.
   - **Resolution**: Updated the code to consistently use single quotes for strings, adhering to the established coding conventions.

2. **Errors Related to Usage of `any` Type**
   - **Location**: `user-list.service.ts`
   - **Issue**: The use of the `any` type was prevalent in the codebase, which can reduce type safety and make the code harder to maintain.
   - **Resolution**: Created and utilized User interface to replace instances where `any` was used, thereby improving type safety and clarity.

3. **Enforcing Semicolons at the End of Statements**
   - **Issue**: The project had 200 errors due to missing semicolons at the end of statements.
   - **Resolution**: Configured prettier to enforce the use of semicolons and updated the codebase to include semicolons at the end of all statements.

## Detailed Fixes Applied

### 1. Fixing Single Quote Warnings

- **Description**: Updated the `app.component.ts` file to use single quotes consistently instead of double quotes.
- **Example Change**:
  ```typescript
  // Before
  title = "linting-formatting-practice";


  // After
  title = 'linting-formatting-practice';

### 2. Replacing any Type with User Interface
**Description**: Updated the `user.service.ts` file to use the created `User` Interface.
```typescript
    //Before
        addUser(user: any) {
        this.users.push(user);
    }

    // After
        addUser(user: User) {
        this.users.push(user);
    }

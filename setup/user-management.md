# User Management

Guide for managing users, roles, and permissions in Lumenvia.

## Overview

Lumenvia supports different user roles with specific permissions:

- **Students** - Can join classes, access materials, take quizzes
- **Teachers** - Can create classes, upload materials, create quizzes, grade
- **Admins** - Full system access and user management

## User Registration

Users can register through:
- Email invitation system
- Self-registration (if enabled)
- Admin-created accounts

## Role Management

### Assigning Roles

Roles are typically assigned during:
1. User invitation
2. Account approval process
3. Manual admin assignment

### Permissions by Role

**Student Permissions:**
- Join classes via invitation
- Access assigned materials
- Take quizzes
- View grades and progress
- Use AI tutor

**Teacher Permissions:**
- All student permissions
- Create and manage classes
- Upload and organize materials
- Create and edit quizzes
- Grade submissions
- Invite students
- View class analytics

**Admin Permissions:**
- All teacher permissions
- Manage all users and classes
- System configuration
- Access to admin dashboard
- User role assignment

## Class Management

### Student Enrollment

Students can be added to classes through:
- Email invitations
- Class codes
- Manual enrollment by teachers
- Bulk import (admin)

### Teacher Assignment

Teachers can be:
- Assigned to classes by admins
- Self-assigned (if permissions allow)
- Co-teachers on same class

## Best Practices

1. **Use least privilege** - Assign minimum required permissions
2. **Regular audits** - Review user roles and access periodically
3. **Invitation system** - Use email invitations for security
4. **Class organization** - Organize classes by department/subject
5. **Backup contacts** - Ensure each class has backup teacher access

## Troubleshooting

Common user management issues and solutions:

### Users Can't Join Classes
- Check invitation email delivery
- Verify class invitation codes
- Confirm user role permissions

### Permission Issues
- Review user role assignments
- Check class-specific permissions
- Verify account activation status

### Account Management
- Password reset procedures
- Account deactivation process
- Role change workflows

## Security Considerations

- Use strong password policies
- Implement account lockout after failed attempts
- Regular permission audits
- Secure invitation link expiration
- Monitor unusual account activity

For detailed implementation, see the system configuration guide.

try {
    // Generate a random token using crypto module
    const { token, password } = body;

    // Hash the token
    const hash = crypto.createHash('sha256').update(token).digest('hex');

    // Check if token is existed and created not more than 48 hours, created_at is timestamp with time zone UTC
    const resetTokenLifetime = getConfig(
      'resetPasswordTokenLifetime',
      48 * 60 * 60 * 1000
    );
}
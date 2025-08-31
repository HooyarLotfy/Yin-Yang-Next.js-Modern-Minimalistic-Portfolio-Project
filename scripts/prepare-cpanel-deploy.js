#!/usr/bin/env node

/**
 * This script helps prepare the Next.js portfolio for cPanel deployment
 * It can create both static exports and Node.js ready deployments
 */

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

// Get current directory (ES module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function executeCommand(command) {
  try {
    execSync(command, { stdio: "inherit" });
    return true;
  } catch (error) {
    console.error(`Error executing: ${command}`);
    console.error(error.message);
    return false;
  }
}

function updateNextConfig(isStaticExport) {
  const configPath = path.join(process.cwd(), "next.config.js");
  let configContent = fs.readFileSync(configPath, "utf-8");

  if (isStaticExport) {
    // Uncomment static export settings
    configContent = configContent.replace(
      /\/\/ output: 'export',/g,
      "output: 'export',"
    );
    configContent = configContent.replace(
      /\/\/ images: {\n  \/\/   unoptimized: true,\n  \/\/ },/g,
      "images: {\n    unoptimized: true,\n  },"
    );

    // Comment out Node.js specific settings
    if (configContent.includes("compress: true,")) {
      configContent = configContent.replace(
        /compress: true,/g,
        "// compress: true,"
      );
    }
    if (configContent.includes("images: {")) {
      configContent = configContent.replace(
        /images: {\n    domains:/g,
        "// images: {\n    // domains:"
      );
      configContent = configContent.replace(
        /  },\n\n  \/\/ Uncomment/g,
        "  // },\n\n  // Uncomment"
      );
    }
  } else {
    // Comment out static export settings
    configContent = configContent.replace(
      /output: 'export',/g,
      "// output: 'export',"
    );
    configContent = configContent.replace(
      /images: {\n    unoptimized: true,\n  },/g,
      "// images: {\n  //   unoptimized: true,\n  // },"
    );

    // Uncomment Node.js specific settings
    configContent = configContent.replace(
      /\/\/ compress: true,/g,
      "compress: true,"
    );
    if (configContent.includes("// images: {")) {
      configContent = configContent.replace(
        /\/\/ images: {\n    \/\/ domains:/g,
        "images: {\n    domains:"
      );
      configContent = configContent.replace(
        /  \/\/ },\n\n  \/\/ Uncomment/g,
        "  },\n\n  // Uncomment"
      );
    }
  }

  fs.writeFileSync(configPath, configContent, "utf-8");
  console.log(
    `Updated next.config.js for ${
      isStaticExport ? "static export" : "Node.js"
    } deployment`
  );
}

function createHtaccessFile() {
  const htaccessContent = `# .htaccess for Next.js static export
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle trailing slashes
  RewriteRule ^(.*)/$ /$1 [L,R=301]
  
  # Serve HTML files without extension
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.+)$ $1.html [L]
</IfModule>

# Ensure correct MIME types
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
  AddType image/svg+xml .svg
  AddType application/font-woff .woff
  AddType application/font-woff2 .woff2
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE image/svg+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/atom_xml
  AddOutputFilterByType DEFLATE application/x-font
  AddOutputFilterByType DEFLATE application/x-font-opentype
  AddOutputFilterByType DEFLATE application/x-font-otf
  AddOutputFilterByType DEFLATE application/x-font-truetype
  AddOutputFilterByType DEFLATE application/x-font-ttf
  AddOutputFilterByType DEFLATE font/opentype
  AddOutputFilterByType DEFLATE font/otf
  AddOutputFilterByType DEFLATE font/ttf
</IfModule>

# Set browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-shockwave-flash "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresDefault "access plus 2 days"
</IfModule>
`;

  fs.writeFileSync(
    path.join(process.cwd(), "out", ".htaccess"),
    htaccessContent,
    "utf-8"
  );
  console.log("Created .htaccess file for static export");
}

console.log("Next.js cPanel Deployment Preparation Script");
console.log("===========================================");

rl.question(
  "Choose deployment type:\n1. Static Export (recommended for basic cPanel)\n2. Node.js (advanced cPanel setup required)\nEnter choice (1/2): ",
  (choice) => {
    const isStaticExport = choice === "1";

    console.log(
      `\nPreparing for ${
        isStaticExport ? "Static Export" : "Node.js"
      } deployment...`
    );

    // Update next.config.js based on deployment choice
    updateNextConfig(isStaticExport);

    // Clean previous build
    console.log("\nCleaning previous build...");
    executeCommand("npm run clean || rm -rf .next out");

    // Install dependencies if needed
    rl.question(
      "\nDo you want to install/update dependencies? (y/n): ",
      (answer) => {
        if (answer.toLowerCase() === "y") {
          console.log("\nInstalling dependencies...");
          executeCommand("npm ci || npm install");
        }

        // Build the project
        console.log("\nBuilding project...");
        const buildSuccess = executeCommand("npm run build");

        if (buildSuccess) {
          console.log("\nBuild completed successfully!");

          if (isStaticExport) {
            // Create .htaccess file for static export
            createHtaccessFile();

            console.log(
              '\nYour static export is ready in the "out" directory.'
            );
            console.log(
              'Upload the entire contents of the "out" directory to your cPanel hosting.'
            );
          } else {
            console.log("\nYour Node.js build is ready.");
            console.log("Upload the following to your cPanel hosting:");
            console.log("- .next directory");
            console.log("- package.json");
            console.log("- package-lock.json");
            console.log("- public directory");
            console.log("- next.config.js");

            console.log("\nThen, set up a Node.js application in cPanel with:");
            console.log("- Node.js version: 18 or higher");
            console.log("- Application mode: Production");
            console.log("- Start command: npm start");
          }
        } else {
          console.error("\nBuild failed. Check the errors above.");
        }

        rl.close();
      }
    );
  }
);

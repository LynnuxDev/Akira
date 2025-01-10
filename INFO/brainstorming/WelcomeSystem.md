# Welcome Message System

## Overview

The welcome message system is a feature that allows server administrators to set custom welcome messages for their server. This can be done through an interactive setup process using either a Discord modal or messages. Once configured, the system can send a welcome message whenever a new user joins the server.

## Commands and Workflow

### Commands

1. `!welcomesetup` (aliases: `!setupwelcome`, `!welcomecfg`)
    - **Description:** Begins the interactive setup for the welcome message.
    - **Options:**
      - **Modal Setup:** Opens a modal where users can input the welcome message and specify options like channels, formatting, and variables.
      - **Message-Based Setup:** Guides the user step-by-step via bot messages, asking for inputs like the welcome message, channel, and any conditions.

2. `!welcometest` (alias: `!testwelcome`)
    - **Description:** Simulates a user joining the server to preview how the welcome message will appear.

3. `!welcometoggle` (aliases: `!togglewelcome`, `!enablewelcome`, `!disablewelcome`)
    - **Description:** Toggles the welcome message system on or off for the server.
    - **Behavior:**
      - If toggled on and the setup is incomplete, the bot will prompt the user to complete the setup first.
      - If toggled off, no welcome messages will be sent.

4. `!welcomereset`
    - **Description:** Resets the welcome message configuration for the server, requiring a fresh setup if the feature is re-enabled.

### Interactive Setup Details

1. **Modal Setup**
    - Fields Included in the modal:
      - **Welcome Channel:** Input to specify which channel welcome message should be send to. (ChannelID and ChannelName.)
      - **Welcome Message:** Input field for the message content. Supports placeholders like `%author.mention%`, `%server.name%`, `%time.dmy%`.
      - **User Mention:** Wether the user will be pinged with the message.
        - Allowed answers:
          - true
          - false
      - **Message Type:** The type of the message.
        - Allowed answers:
          - message
          - embed
      - **Image URL:** A image to add to the message, if type is message it attaches the image, if type is embed use embed image. (optional)

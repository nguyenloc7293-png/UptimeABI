// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Firit Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://www.facebook.com/hiraku45', label: 'Facebook' },
    { link: 'https://github.com/nguyenloc7293-png', label: 'Blog' },
    { link: 'mailto:vanloc.nguyen@vn.ab-inbev.com', label: 'Email Me', highlight: true },
  ],
}

  const workerConfig: WorkerConfig = {
        monitors: [
          // --- Monitor 1: MAPS ---
          {
            id: 'maps_monitor',
            name: 'Maps Monitor',
            method: 'GET',
            target: 'https://maps.vn.ab-inbev.com',
            tooltip: 'This is a tooltip for MAPS',
            statusPageLink: 'https://maps.vn.ab-inbev.com',
            expectedCodes: [200],
            timeout: 10000,
            headers: {
              'User-Agent': 'Uptimeflare',
              Authorization: 'Bearer YOUR_TOKEN_HERE',
            },
          },
      
          // --- Monitor 2: VPN ---
          {
            id: 'abi_vpn_monitor',
            name: 'ABI VPN Monitor',
            method: 'GET',
            target: 'https://vpn.vn.ab-inbev.com',
            tooltip: 'This is a VPN ABI',
            statusPageLink: 'https://vpn.vn.ab-inbev.com',
            expectedCodes: [200],
            timeout: 10000,
            headers: {
              'User-Agent': 'Uptimeflare',
              Authorization: 'Bearer YOUR_TOKEN_HERE',
            },
          },
      
          // --- Monitor 3: Google DNS over HTTPS ---
          {
            id: 'google_doh',
            name: 'Google DNS-over-HTTPS',
            method: 'GET',
            target: 'https://dns.google/dns-query',
            tooltip: 'This is a DNS Google',
            statusPageLink: 'https://google.com',
            expectedCodes: [200],
            timeout: 10000,
          },
      // [OPTIONAL] body to be sent (require POST/PUT/PATCH method)
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      // responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://`, `globalping://` and `http(s)://` proxies
      // checkProxy: 'worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      // checkProxyFallback: true,
     // Example TCP Monitor
   {
      id: 'test_tcp_monitor',
      name: 'Maps Monitor',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '180.148.7.129:443',
      tooltip: 'My production server SSH',
      statusPageLink: 'https://maps.vn.ab-inbev.com',
      timeout: 5000,
    },
    {
      id: 'test_gg_monitor',
      name: '8.8.8.8 DNS',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '8.8.8.8:53',
      tooltip: 'DNS Google',
      statusPageLink: 'https://google.com',
      timeout: 5000,
    },
    {
      id: 'test_dns_monitor',
      name: '1.1.1.1 DNS',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '1.1.1.1:853',
      tooltip: 'DNS CLoudFlare',
      statusPageLink: 'https://one.one.one.one/',
      timeout: 5000,
    },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }

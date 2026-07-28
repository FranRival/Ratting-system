// worker.js
export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://inpchecker.top",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (url.pathname === "/vote" && request.method === "POST") {
      const { stars } = await request.json();
      if (!stars || stars < 1 || stars > 5) {
        return new Response(JSON.stringify({ error: "invalid" }), { status: 400, headers: corsHeaders });
      }

      let sum = parseInt(await env.RATINGS.get("sum")) || 0;
      let count = parseInt(await env.RATINGS.get("count")) || 0;

      sum += stars;
      count += 1;

      await env.RATINGS.put("sum", sum.toString());
      await env.RATINGS.put("count", count.toString());

      return new Response(JSON.stringify({ average: (sum / count).toFixed(1), count }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (url.pathname === "/rating" && request.method === "GET") {
      let sum = parseInt(await env.RATINGS.get("sum")) || 0;
      let count = parseInt(await env.RATINGS.get("count")) || 0;
      const average = count > 0 ? (sum / count).toFixed(1) : "0";

      return new Response(JSON.stringify({ average, count }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response("Not found", { status: 404, headers: corsHeaders });
  },
};

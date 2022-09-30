import { createPrismaQueryEventHandler } from "prisma-query-log";
import { PrismaClient } from "@prisma/client";

export abstract class ApplicationModel {
  constructor(
    log?: boolean,
    protected model = new PrismaClient({
      log: [
        {
          level: "query",
          emit: "event",
        },
      ],
    })
  ) {
    if (log) this.logQuery();
  }
  logQuery = () => {
    const log = createPrismaQueryEventHandler();
    this.model.$on("query", log);
  };
}
